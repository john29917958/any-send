import { Button } from "react-native-paper";

const Level = (props) => {
  return (
    <Button
      mode="text"
      onPress={() => {
        console.log(`Level ${props.name} pressed`);
      }}
    >
      {props.name}
    </Button>
  );
};

export default Level;
