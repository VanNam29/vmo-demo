import { Confirm } from "react-st-modal";

export function ConfirmModal(props) {
  return (
    <div>
      <button
        onClick={async () => {
          const result = await Confirm("–°onfirmation purchase", "–°onfirmation title");

          if (result) {
            props.handleSubmit(event, true);
          }
          else {
            props.handleSubmit(event, false);
          }
        }}
      >
        {props.value}
      </button>
    </div>
  );
}
