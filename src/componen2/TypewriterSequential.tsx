import { Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

type TypewriterItem = {
  text: string;
  props?: any;
};

const TypewriterSequential = ({
  items,
  speed = 20,
  delayBetween = 500,
}: {
  items: TypewriterItem[];
  speed?: number;
  delayBetween?: number;
}) => {
  const [renderedTexts, setRenderedTexts] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex >= items.length) return;

    const { text } = items[currentIndex];
    let i = 0;
    let displayed = "";

    const typeInterval = setInterval(() => {
      displayed = text.slice(0, i + 1);
      const temp = [...renderedTexts];
      temp[currentIndex] = displayed;
      setRenderedTexts(temp);
      i++;

      if (i === text.length) {
        clearInterval(typeInterval);
        setTimeout(() => setCurrentIndex((prev) => prev + 1), delayBetween);
      }
    }, speed);

    return () => clearInterval(typeInterval);
  }, [currentIndex]);

  return (
    <>
      {items.map((item, i) => (
        <Text key={i} {...item.props}>
          {renderedTexts[i] || ""}
        </Text>
      ))}
    </>
  );
};

export default TypewriterSequential;
