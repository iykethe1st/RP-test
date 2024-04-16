import { Spinner } from ".";

const Button = ({ label, type, onClick, loading, disabled }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${
        disabled ? "text-white/60 " : "text-white"
      } w-full bg-[#9AB1BD] justify-center text-[20px] px-6 py-3 rounded-[30px] flex items-center font-medium hover:bg-[#a8c0cd] hover:scale-[1.01] transition ease-in-out duration-300`}
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
