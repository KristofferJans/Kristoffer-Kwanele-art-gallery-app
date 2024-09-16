import styled from "styled-components";

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  padding: 10px;
  background-color: #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  width: 100%;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 4px;
  margin-right: 10px;
  outline: none;
  font-size: 1em;
  background-color: #f2f2f2;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #005bb5;
  }
`;

export default function CommentForm({ onSubmitComment }) {
  function handleSubmit(event) {
    event.preventDefault();
    const comment = event.target.elements.comment.value;

    if (comment.trim()) {
      onSubmitComment(comment);
      event.target.reset();
    }
  }

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <Input
          id="comment"
          type="text"
          name="comment"
          placeholder="Add a comment..."
        />
        <Button type="submit">Send</Button>
      </Form>
    </FormContainer>
  );
}
