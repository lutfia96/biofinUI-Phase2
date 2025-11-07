export const Loader = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1100,
        background: "rgba(0,0,0,0.15)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="bg-linear-to-r from-slate-200 via-white to-slate-100 w-[10%] px-9 rounded-md">
        <span className="border rounded-full w-[5%]">
          <img
            // src="/assets/img/loader.png"
            src="/assets/img/load1.png"
            className="rounded-full w-full"
            alt="logo"
            style={{ animation: "spin 1s linear infinite" }}
          />
        </span>
      </div>
    </div>
  );
};
