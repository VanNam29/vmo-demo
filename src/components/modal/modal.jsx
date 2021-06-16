import { Confirm } from "react-st-modal";

export function ConfirmModal(props) {
  return (
    <div>
      <button
        onClick={async () => {
          const result = await Confirm("Сonfirmation purchase", "Сonfirmation title");

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
