import { Button, HStack, Input, useToast } from "@chakra-ui/react";
import { useState } from "react";
const Form = ({ createTodo }) => {
  const [enteredTodo, setEnteredTodo] = useState("");

  const toast = useToast();

  const addTodo = (e) => {
    e.preventDefault();

    if (!enteredTodo) {
      toast({
        position: 'top',
        title: '新しいタスクを入力してください',
        status: "error",
        duration: 2000,
        isClosable: true,
        // containerStyle: {
        //   width: '800px',
        //   maxWidth: '100%',
        // },
        
      });
      return;
    }

    const newTodo = {
      id: Math.floor(Math.random() * 1e5),
      content: enteredTodo,
    };

    createTodo(newTodo);

    setEnteredTodo("");

    toast({
      title: "新しいタスクを追加しました！",
      description: enteredTodo,
      position: "top",
      status: "info",
      duration: 3000,
      isClosable: true,
    }); 
  };

  return (
    <div>
      <form onSubmit={addTodo}>
      <HStack>
        {/* POINT ChakraのInputコンポーネントを使う  */}
        <Input
          placeholder="新しいタスク"
          _placeholder={{ opacity: "0.3", color: "gray.500" }}
          size="lg"
          p={3}
          bgColor="cyan.50"
          variant="flushed"
          value={enteredTodo}
          onChange={(e) => setEnteredTodo(e.target.value)}
        />
        <Button
          colorScheme="blue"
          size="md"
          bgColor="white"
          variant="outline"
          px={7}
          type="submit"
        >
          追加
        </Button>
      </HStack>
      </form>
    </div>
  );
};

export default Form;
