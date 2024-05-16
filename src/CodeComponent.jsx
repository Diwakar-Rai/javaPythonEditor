import React, { useContext } from "react";
import Dropdown from "./Dropdown";
import CodeMirror from "@uiw/react-codemirror";
import { AppContext } from "./GlobalContext";
import { java } from "@codemirror/lang-java";
import { python } from "@codemirror/lang-python";

const CodeComponent = () => {
  let { handleJavaOutput, javaValue, onchangeJava, subjectId, javaOutput } =
    useContext(AppContext);
  return (
    <div className="flex w-full p-5">
      <section className="border-[1px] w-1/2 p-2 h-[500px] overflow-y-auto">
        <h1 className="text-2xl font-bold">Description</h1>
        <article>
          <h2 className="font-bold text-lg pt-3">Two Sum</h2>
          <p className="pb-2">
            Given an array of integers nums and an integer target, return
            indices of the two numbers such that they add up to target.
          </p>
          <p className="pb-2">
            You may assume that each input would have exactly one solution, and
            you may not use thesame element twice.
          </p>
          <p className="pb-2"> You can return the answer in any order.</p>
        </article>
        <article>
          <h3 className="font-bold text-lg">Input Format</h3>
          <ul className="list-disc pl-6">
            <li>
              First line will contain T, number of testcases. Then the testcases
              follow
            </li>
            <li>
              The first line in each testcase contains an array of integers nums
              seperated by space
            </li>
            <li>The next line contains one integer target</li>
          </ul>
        </article>
        <article className="py-2">
          <h3 className="text-lg font-bold">Output Format</h3>
          <ul className="list-disc pl-6">
            <li>One line with array of two integers</li>
          </ul>
        </article>
        <article>
          <h3 className="text-lg font-bold">Sample Input</h3>
          <aside className="bg-slate-100 rounded-xl p-2 mb-3">
            <p>3</p>
            <p>2 7 11 15</p>
            <p>6</p>
            <p>3 2 4</p>
            <p>9</p>
            <p>3 3</p>
            <p>9</p>
          </aside>
        </article>

        <article>
          <h2 className="text-lg font-bold">Sample Output</h2>
          <aside className="bg-slate-100 rounded-xl p-2 mb-3">
            <p>0 1</p>
            <p>1 0</p>
            <p>0 1</p>
          </aside>
        </article>

        <article>
          <h2 className="text-lg font-bold">Constraints</h2>
          <ul className="list-disc pl-6">
            <li>
              <span className="bg-slate-100 my-1 px-2 rounded-sm">
                2 ≤ nums.length ≤ 10
              </span>
            </li>
            <li>
              <span className="bg-slate-100 my-1 px-2 rounded-sm">
                -10 ≤ nums[i] ≤ 10
              </span>{" "}
            </li>
            <li>
              <span className="bg-slate-100 my-1 px-2 rounded-sm">
                -10 ≤ target ≤ 10
              </span>
            </li>
            <li>
              <span className="bg-slate-100 my-1 px-2 rounded-sm">
                Only one valid answer exists
              </span>
            </li>
          </ul>
        </article>
      </section>
      <section className="border-[1px] w-1/2 p-2 overflow-y-auto h-[500px]">
        <Dropdown />
        <section className="py-4">
          <CodeMirror
            className="text-sm border-[1px] min-h-20 w-full h-[90%]"
            value={javaValue}
            height="100%"
            extensions={[
              subjectId == 71 ? python() : subjectId == 62 ? java() : null,
            ]}
            onChange={onchangeJava}
          />
        </section>

        <section className="flex justify-end py-2">
          <button
            onClick={handleJavaOutput}
            className="py-1 px-4 bg-slate-900 text-white"
          >
            Run
          </button>
        </section>
        <section className="flex justify-between gap-2">
          <aside className="w-1/2">
            <h1 className="text-xl font-bold">Custom Input</h1>
            <div className="border-2 rounded bg-slate-200 p-2 h-52">
              <p>3</p>
              <p>2 7 11 15</p>
              <p>6</p>
              <p>3 2 4</p>
              <p>9</p>
              <p>3 3</p>
              <p>9</p>
            </div>
          </aside>
          <aside className="w-1/2">
            <h1 className="text-xl font-bold">Output</h1>

            <div
              dangerouslySetInnerHTML={{
                __html: `${javaOutput == null ? "loading..." : javaOutput}`,
              }}
              className="rounded bg-slate-800 text-white p-2 h-52"
            ></div>
          </aside>
        </section>
      </section>
    </div>
  );
};

export default CodeComponent;
