import SwitchButton from "@/components/Switch";
import { Container } from "@mantine/core";

export default function SwitchPage() {
    const containerProps = {
        h: 50,
        mt: "md",
      };
      
    return (
        <Container {...containerProps}>
          <SwitchButton />
        </Container>
      );
}
