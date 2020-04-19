import * as React from "react";
import "./Logs.scss";

export interface Props {
  logs: string;
  loaded: boolean;
}

export function Logs(props: Props) {
  const _extract = (line: string, prefix: string, suffix: string) => {
    let s = line;
    var i = s.indexOf(prefix);
    if (i >= 0) {
      s = s.substring(i + prefix.length);
    } else {
      return "";
    }
    if (suffix) {
      i = s.indexOf(suffix);
      if (i >= 0) {
        s = s.substring(0, i);
      } else {
        return "";
      }
    }
    return s;
  };
  const _renderTerminalOutput = () => {
    const lines: JSX.Element[] = [];
    let i = 0;
    for (const line of props.logs.split("\n")) {
      let color = "";
      let text = "";
      let newLine = "";
      newLine = line.substr(line.indexOf(":"));
      if (line.includes("[32m")) {
        color = "green";
        text = _extract(line, "[32m", "[39m:");
      } else if (line.includes("[31m")) {
        color = "red";
        text = _extract(line, "[31m", "[39m:");
      } else {
        newLine = "";
      }

      lines.push(
        <div key={i}>
          {newLine === "" ? null : <span>~$&nbsp;</span>}
          {newLine === "" ? null : <span style={{ color: color }}>{text}</span>}
          {newLine === "" ? line : newLine} {newLine === "" ? null : <br />}
        </div>
      );
      i++;
    }
    return lines;
  };

  return (
    <div className="spacing">
      <div className="terminal-window">
        <header>
          <div className="button green"></div>
          <div className="button yellow"></div>
          <div className="button red"></div>
        </header>
        <section className="terminal">
          <div className="history"></div>
          <span className="prompt">
            {props.loaded ? (
              _renderTerminalOutput()
            ) : (
              <span>
                <span>~$&nbsp;</span>
                <p className="saving">
                  Initialize Logs<span>.</span>
                  <span>.</span>
                  <span>.</span>
                </p>
              </span>
            )}
          </span>
        </section>
      </div>
    </div>
  );
}
