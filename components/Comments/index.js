import styled from "styled-components";

const CommentsContainer = styled.div`
  margin-top: 20px;
  padding: 10px;
  background-color: #d3d3d3;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CommentsList = styled.ul`
  list-style: none;
  padding: 0;
`;

const CommentItem = styled.div`
  padding: 10px;
  background-color: #e6e6e6;
  border-radius: 4px;
  margin-bottom: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  text-align: left;
`;

const CommentText = styled.p`
  margin: 0;
`;

const CommentDate = styled.span`
  display: block;
  margin-top: 5px;
  font-size: 0.8em;
  color: gray;
`;

export default function Comments({ comments }) {
  if (!comments) return <h2>FEHLER</h2>;

  return (
    <CommentsContainer>
      <h3>Comments</h3>
      {comments.length > 0 ? (
        <CommentsList>
          {comments.map((comment, index) => (
            <li key={index}>
              <CommentItem>
                <CommentText>{comment.text}</CommentText>
                <CommentDate>{comment.date}</CommentDate>
              </CommentItem>
            </li>
          ))}
        </CommentsList>
      ) : (
        <p>No comments yet!</p>
      )}
    </CommentsContainer>
  );
}
