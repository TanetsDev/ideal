"use client";

const BoxBtn = () => {
  return (
    <span className=" bg-goldPrimaryBtn w-[108px] h-[36px] flex items-center justify-center rounded">
      <button
        type="button"
        className=" w-[106px] h-[34px] flex items-center justify-center font-roboto text-base text-blackBtn bg-cardBacsic rounded"
        onClick={() => console.log("Buy box click")}
      >
        {"До кошика"}
      </button>
    </span>
  );
};

export default BoxBtn;
