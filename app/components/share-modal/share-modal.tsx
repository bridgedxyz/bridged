import React from "react";
import styled from "@emotion/styled";
import { Modal, Switch } from "@material-ui/core";
import { StyledButton } from "../top-bar/button-style";
import copy from "copy-to-clipboard";
import { css } from "@emotion/react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  isPublic: boolean;
  publicContorl: () => void;
}

function onClickCopyLink() {
  copy(window.location.href);
  alert("Copied to clipboard!");
}

export function ShareModalContents(props: Props) {
  return (
    <Modal open={props.isOpen} onClose={props.onClose}>
      <Wrapper>
        <Row>
          <Title>Share to web</Title>
          <StyledSwitch
            checked={props.isPublic}
            onChange={props.publicContorl}
            color="default"
          />
        </Row>

        <SubTitle>
          {props.isPublic ? (
            <>
              Anyone with the link can view this
              <br />
              scene
            </>
          ) : (
            <>Only you can view this scene</>
          )}
        </SubTitle>
        <Field>
          <Input value={window.location.href} />
          <CopLink isDisaible={!props.isPublic} onClick={onClickCopyLink}>
            Copy
          </CopLink>
        </Field>

        {/* <Row>
          <StyledHref href="/" target={"_blank"}>
            Learn about sharing
          </StyledHref>
          <CopLink onClick={onClickCopyLink}>Copy Link</CopLink>
        </Row> */}
      </Wrapper>
    </Modal>
  );
}

const Wrapper = styled.div`
  width: 395px;
  /* height: 222px; */
  background: #fdfdfd;
  padding: 32px 24px;
  box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.25), 0px 0px 2px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
  position: absolute;
  top: 56px;
  right: 52px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Title = styled.h1`
  margin: 0;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
  margin-top: 12px;
  margin-bottom: 10px;
`;

const StyledSwitch = styled(Switch)`
  text-align: right;
  margin-left: auto;
`;

const SubTitle = styled.h6`
  margin: 0;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #929292;
`;
const Field = styled(Row)`
  background: #f8f8f8;
  border-radius: 2px;
  color: #bbbbbb;
  padding: 13px 8px;
  margin-top: 37px;
`;

const Input = styled.input`
  width: 100%;
  border: 0;
  outline: 0;
  background: #f8f8f8;
  color: #bbbbbb;
  margin-right: auto;

  &:disabled {
    color: #e7e7e7;
  }
`;

const StyledHref = styled.a`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;

  color: #000000;
  text-decoration: none;
`;

const CopLink = styled.button<{ isDisaible: boolean }>`
  font-size: 14px;
  border-radius: 4px;
  box-sizing: border-box;
  cursor: pointer;
  outline: none;
  border: 0;
  padding: 10px;
  background: #ffffff;
  border-radius: 2px;
  margin-left: 12px;

  ${(props) =>
    props.isDisaible
      ? css`
          color: #dfdfdf;
          background: #f8f8f8;
        `
      : ""}
`;
