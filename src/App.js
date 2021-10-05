import { Clamp } from "./Clamp"

const SAMPLE_TEXT = `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`

export function App() {
  return (
    <div>
      <p>
        <a
          href="https://github.com/brendansudol/clamp-experiment"
          rel="noreferrer"
          target="_blank"
        >
          source code →
        </a>
      </p>

      <h4>3 line clamp, no "show more/less" buttons:</h4>
      <Clamp className="example" text={SAMPLE_TEXT} lineCount={3} />

      <h4>with "show more/less" buttons:</h4>
      <Clamp
        className="example"
        text={SAMPLE_TEXT}
        lineCount={3}
        renderShowMore={renderShowMore}
        renderShowLess={renderShowLess}
      />

      <h4>
        "show more/less" buttons not rendered because text doesn't overflow
        `lineCount`
      </h4>
      <Clamp
        className="example"
        text={SAMPLE_TEXT}
        lineCount={30}
        renderShowMore={renderShowMore}
        renderShowLess={renderShowLess}
      />
    </div>
  )
}

function renderShowMore(onClick) {
  return <button onClick={onClick}>show more</button>
}

function renderShowLess(onClick) {
  return <button onClick={onClick}>show less</button>
}
