import { Spinner } from ".";

const Button = ({ label, type, onClick, loading, disabled }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${
        disabled ? "text-white/60 " : "text-white"
      } w-full bg-[#9AB1BD] justify-center  px-6 py-3 rounded-[30px] flex items-center font-medium`}
    >
      {loading ? (
        <div className="flex items-center gap-2">
          <Spinner />
          Please wait...
        </div>
      ) : (
        label
      )}
    </button>
  );
};

export default Button;
