import React from "react";
import { render,cleanup } from "@testing-library/react";
import Message from "./Message";


describe("Message Component", ()=>{

  describe("rendering", () => {
    it("should return a container", () => {
      const { container } = render(
        <Message content="Some stuff" isImportant={true} />
      );
      expect(container).toBeDefined();
      expect(container.outerHTML).toBe("<div><p><strong title=\"Important content\">Some stuff</strong></p></div>");
    });

    it('should always render the message', () => {
      const importantRenderResult = render(
        <Message content="Some stuff" isImportant={true} />
      );

      const importantElement = importantRenderResult.getByText("Some stuff");
      expect(importantElement).toBeInTheDocument();
      cleanup();

      const regularRenderResult = render(
        <Message content="Some stuff" isImportant={false} />
      );

      const regularElement = regularRenderResult.getByText("Some stuff");
      expect(regularElement).toBeInTheDocument();
    });
  });

  it('should make important messages strong', ()=>{
    const { getByText } = render(
      <Message content="Some stuff" isImportant={true} />
    );

    const element = getByText("Some stuff");
    expect(element.nodeName).toBe("STRONG");
  });

  it('should not make regular messages strong', ()=>{
    const { getByText } = render(
      <Message content="Some stuff" isImportant={false} />
    );

    const element = getByText("Some stuff");
    expect(element.nodeName).not.toBe("STRONG");
  });

});
