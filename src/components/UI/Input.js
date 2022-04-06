import styled from "styled-components";

export const Input = styled.input`
  padding: ${(props) => props.padding};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.border_radius};
  margin: ${(props) => props.margin};
  background: ${(props) => props.background};
  font-size: ${(props) => props.font_size};
  size: ${(props) => props.size};

  &:placeholder {
    color: ${(props) => props.text_color};
    text-align: ${(props) =>
      props.text_align === "center" ? "center" : "left"};
  }

  &:focus {
    border: none;
    outline: none;
    border-radius: ${(props) => props.border_radius};
  }
`;
