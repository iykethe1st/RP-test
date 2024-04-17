import ReactSlider from "react-slider";

const SplitSlider = () => {
  return (
    <div className="w-full">
      <ReactSlider
        className="horizontal-slider"
        thumbClassName="example-thumb"
        trackClassName="example-track"
        onBeforeChange={(value, index) =>
          console.log(`onBeforeChange: ${JSON.stringify({ value, index })}`)
        }
        onChange={(value, index) =>
          console.log(`onChange: ${JSON.stringify({ value, index })}`)
        }
        onAfterChange={(value, index) =>
          console.log(`onAfterChange: ${JSON.stringify({ value, index })}`)
        }
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
      />
    </div>
  );
};

export default SplitSlider;
