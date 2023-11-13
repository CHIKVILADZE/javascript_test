function serialize(numbers) {
  const serializedString = numbers.join(',');

  const compressedString = serializedString.replace(
    /(\d)\1+/g,
    (match, digit) => match.length + digit
  );

  return compressedString;
}

function deserialize(serializedString) {
  const decompressedString = serializedString.replace(
    /(\d+)(\d)/g,
    (_, count, digit) => digit.repeat(count)
  );

  const numbers = decompressedString.split(',').map(Number);

  return numbers;
}

function testSerialization(originalArray) {
  const originalString = JSON.stringify(originalArray);
  const compressedString = serialize(originalArray);
  const compressionRatio =
    ((originalString.length - compressedString.length) /
      originalString.length) *
    100;

  console.log('Original: ', originalString);
  console.log('Compressed: ', compressedString);
  console.log('Compression Ratio: ', compressionRatio.toFixed(2) + '%');
  console.log('Deserialized: ', JSON.stringify(deserialize(compressedString)));
  console.log('------------------------');
}

// Test cases
testSerialization([1, 2, 3, 4, 5]);
testSerialization(
  Array.from({ length: 50 }, () => Math.floor(Math.random() * 300) + 1)
);
testSerialization(
  Array.from({ length: 100 }, () => Math.floor(Math.random() * 300) + 1)
);
testSerialization(
  Array.from({ length: 500 }, () => Math.floor(Math.random() * 300) + 1)
);
testSerialization(
  Array.from({ length: 1000 }, () => Math.floor(Math.random() * 300) + 1)
);
testSerialization(Array.from({ length: 9 }, (_, i) => i + 1));
testSerialization(Array.from({ length: 90 }, (_, i) => i + 10));
testSerialization(Array.from({ length: 900 }, (_, i) => (i % 300) + 1));
