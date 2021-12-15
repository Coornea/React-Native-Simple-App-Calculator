import React, { useState } from "react";
import { Pressable, ScrollView } from "react-native";
import { Box, Input, HStack } from "native-base";

export default function Calculator() {
  const [result, setResult] = useState(0);
  const [calculate, setCalculate] = useState("");

  const Counter = (i) => {
    setCalculate(calculate + i);
  };
  //   if (result) {
  //     return Counter.replace(result);
  //   }

  const handleClear = () => {
    setCalculate("");
    setResult(0);
  };

  const handleDelete = () => {
    setCalculate(calculate.slice(0, -1));
  };

  const calculator = () => {
    try {
      let apply = calculate ? eval(calculate).toString() : null;
      setResult(apply);
    } catch (error) {
      console.log(error);
      setCalculate("");
    }
  };

  return (
    <Box
      maxW={"95%"}
      px={6}
      py={8}
      mb="-4"
      rounded={8}
      shadow={2}
      _light={{ bg: "white" }}
      _dark={{
        bg: "coolGray.400",
      }}
    >
      <Box
        _light={{ bgColor: "violet.600" }}
        _dark={{ bgColor: "darkBlue.800" }}
        rounded={10}
        shadow={4}
        h={"80px"}
      >
        <Input
          letterSpacing={4}
          textAlign={"right"}
          pr={1}
          fontSize={"50px"}
          color={"white"}
          isReadOnly="false"
          borderWidth={0}
        >
          {calculate}
        </Input>
      </Box>
      <Box my="1" alignItems={"center"} width={"100%"}>
        <ScrollView>
          <Input
            fontSize={40}
            isReadOnly="true"
            isFullWidth="true"
            borderWidth={0}
          >
            {!result ? "" : `${result}`}
          </Input>
        </ScrollView>
      </Box>
      <Box>
        <Box
          _light={{ bg: "blue.100" }}
          _dark={{ bg: "dark.600" }}
          p="2"
          rounded="lg"
          w="100%"
        >
          <HStack space={2} p={2} alignItems={"center"}>
            <Pressable onPress={handleClear}>
              <Box
                w="60"
                h="50px"
                bgColor={"blue.600"}
                shadow={12}
                rounded={4}
                _text={{
                  fontSize: "30px",
                  margin: "auto",
                  color: "#fff",
                }}
              >
                C
              </Box>
            </Pressable>
            <Pressable onPress={() => Counter("%")}>
              <Box
                w={60}
                h="50px"
                bgColor={"blue.600"}
                shadow={12}
                rounded={4}
                _text={{
                  fontSize: "32px",
                  margin: "auto",
                  color: "#fff",
                }}
              >
                %
              </Box>
            </Pressable>
            <Pressable onPress={() => Counter("/")}>
              <Box
                w={60}
                h="50px"
                bgColor={"blue.600"}
                shadow={12}
                rounded={4}
                _text={{
                  fontSize: "32px",
                  margin: "auto",
                  color: "#fff",
                }}
              >
                /
              </Box>
            </Pressable>
            <Pressable onPress={handleDelete}>
              <Box
                w="60"
                h="50px"
                bgColor={"blue.600"}
                shadow={12}
                rounded={4}
                _text={{
                  fontSize: "30px",
                  margin: "auto",
                  color: "#fff",
                }}
              >
                {`\u232b`}
              </Box>
            </Pressable>
          </HStack>
          <HStack space={2} p={2} alignItems={"center"}>
            <Pressable onPress={() => Counter("7")}>
              <Box
                w="60"
                h="40px"
                bgColor={"blue.600"}
                shadow={12}
                rounded={4}
                _text={{
                  fontSize: "32px",
                  margin: "auto",
                  color: "#fff",
                }}
              >
                7
              </Box>
            </Pressable>
            <Pressable onPress={() => Counter("8")}>
              <Box
                w="60"
                h="40px"
                bgColor={"blue.600"}
                shadow={12}
                rounded={4}
                _text={{
                  fontSize: "32px",
                  margin: "auto",
                  color: "#fff",
                }}
              >
                8
              </Box>
            </Pressable>
            <Pressable onPress={() => Counter("9")}>
              <Box
                w="60"
                h="40px"
                bgColor={"blue.600"}
                shadow={12}
                rounded={4}
                _text={{
                  fontSize: "32px",
                  margin: "auto",
                  color: "#fff",
                }}
              >
                9
              </Box>
            </Pressable>
            <Pressable onPress={() => Counter("*")}>
              <Box
                w="60"
                h="40px"
                bgColor={"blue.600"}
                shadow={12}
                rounded={4}
                _text={{
                  fontSize: "32px",
                  margin: "auto",
                  color: "#fff",
                }}
              >
                x
              </Box>
            </Pressable>
          </HStack>
          <HStack space={2} p={2} alignItems={"center"}>
            <Pressable onPress={() => Counter("4")}>
              <Box
                w="60"
                h="40px"
                bgColor={"blue.600"}
                shadow={12}
                rounded={4}
                _text={{
                  fontSize: "32px",
                  margin: "auto",
                  color: "#fff",
                }}
              >
                4
              </Box>
            </Pressable>
            <Pressable onPress={() => Counter("5")}>
              <Box
                w="60"
                h="40px"
                bgColor={"blue.600"}
                shadow={12}
                rounded={4}
                _text={{
                  fontSize: "32px",
                  margin: "auto",
                  color: "#fff",
                }}
              >
                5
              </Box>
            </Pressable>
            <Pressable onPress={() => Counter("6")}>
              <Box
                w="60"
                h="40px"
                bgColor={"blue.600"}
                shadow={12}
                rounded={4}
                _text={{
                  fontSize: "32px",
                  margin: "auto",
                  color: "#fff",
                }}
              >
                6
              </Box>
            </Pressable>
            <Pressable onPress={() => Counter("-")}>
              <Box
                w="60"
                h="40px"
                bgColor={"blue.600"}
                shadow={12}
                rounded={4}
                _text={{
                  fontSize: "32px",
                  margin: "auto",
                  color: "#fff",
                }}
              >
                -
              </Box>
            </Pressable>
          </HStack>
          <HStack space={2} p={2} alignItems={"center"}>
            <Pressable onPress={() => Counter("1")}>
              <Box
                w="60"
                h="40px"
                bgColor={"blue.600"}
                shadow={12}
                rounded={4}
                _text={{
                  fontSize: "32px",
                  margin: "auto",
                  color: "#fff",
                }}
              >
                1
              </Box>
            </Pressable>
            <Pressable onPress={() => Counter("2")}>
              <Box
                w="60"
                h="40px"
                bgColor={"blue.600"}
                shadow={12}
                rounded={4}
                _text={{
                  fontSize: "32px",
                  margin: "auto",
                  color: "#fff",
                }}
              >
                2
              </Box>
            </Pressable>
            <Pressable onPress={() => Counter("3")}>
              <Box
                w="60"
                h="40px"
                bgColor={"blue.600"}
                shadow={12}
                rounded={4}
                _text={{
                  fontSize: "32px",
                  margin: "auto",
                  color: "#fff",
                }}
              >
                3
              </Box>
            </Pressable>
            <Pressable onPress={() => Counter("+")}>
              <Box
                w="60"
                h="40px"
                bgColor={"blue.600"}
                shadow={12}
                rounded={4}
                _text={{
                  fontSize: "32px",
                  margin: "auto",
                  color: "#fff",
                }}
              >
                +
              </Box>
            </Pressable>
          </HStack>
          <HStack space={2} p={2} alignItems={"center"}>
            <Pressable onPress={() => Counter(".")}>
              <Box
                w="60"
                h="50px"
                bgColor={"blue.600"}
                shadow={12}
                rounded={4}
                _text={{
                  fontSize: "32px",
                  margin: "auto",
                  color: "#fff",
                }}
              >
                .
              </Box>
            </Pressable>
            <Pressable onPress={() => Counter("0")}>
              <Box
                w="60"
                h="50px"
                bgColor={"blue.600"}
                shadow={12}
                rounded={4}
                _text={{
                  fontSize: "32px",
                  margin: "auto",
                  color: "#fff",
                }}
              >
                0
              </Box>
            </Pressable>
            <Pressable onPress={calculator}>
              <Box
                w="127"
                h="50px"
                bgColor={"blue.600"}
                shadow={12}
                rounded={4}
                _text={{
                  fontSize: "32px",
                  margin: "auto",
                  color: "#fff",
                }}
              >
                =
              </Box>
            </Pressable>
          </HStack>
        </Box>
      </Box>
    </Box>
  );
}
