import {
  StyledUserCard,
  StyledInfoBlock,
  StyledDimmedSpan,
} from './UserCard.styled';

type PropsType = any;

export default function UserCard({ user }: PropsType) {
  const { name, username, email, phone, website } = user;

  return (
    <StyledUserCard>
      <StyledInfoBlock>
        Name: <StyledDimmedSpan>{name}</StyledDimmedSpan>
      </StyledInfoBlock>
      <StyledInfoBlock>
        Username: <StyledDimmedSpan>{username}</StyledDimmedSpan>
      </StyledInfoBlock>
      <StyledInfoBlock>
        Email: <StyledDimmedSpan>{email}</StyledDimmedSpan>
      </StyledInfoBlock>
      <StyledInfoBlock>
        Phone: <StyledDimmedSpan>{phone}</StyledDimmedSpan>
      </StyledInfoBlock>
      <StyledInfoBlock>
        Website: <StyledDimmedSpan>{website}</StyledDimmedSpan>
      </StyledInfoBlock>
    </StyledUserCard>
  );
}
