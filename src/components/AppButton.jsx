function AppButton({title, buttonType, handleOnClick, icon = ""}) {
  return (
    <button
      onClick={handleOnClick}
      className={`btn me-2 btn-${buttonType}`}
    >
      <span>{icon}</span>{title}
    </button>
  );
}

export default AppButton;
