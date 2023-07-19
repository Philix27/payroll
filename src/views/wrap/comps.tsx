import {
  Button,
  Form,
  FormGroup,
  FormControl,
  Spinner,
  Card,
} from "react-bootstrap";

interface IProps {
  text: string;
  isLoading: boolean;
  onClick: VoidFunction;
}

export function UpgradeButton({ text, isLoading, onClick }: IProps) {
  return (
    <Button variant="success" className="button" onClick={onClick}>
      {isLoading ? <Spinner animation="border" /> : text}
    </Button>
  );
}


  export function DowngradeButton({ text, isLoading, onClick }: IProps) {
    return (
      <Button variant="success" className="button" onClick={onClick}>
        {isLoading ? <Spinner animation="border" /> : text}
      </Button>
    );
  }

  export function ApproveButton({ text, isLoading, onClick }: IProps) {
    return (
      <Button variant="success" className="button" onClick={onClick}>
        {isLoading ? <Spinner animation="border" /> : text}
      </Button>
    );
  }
