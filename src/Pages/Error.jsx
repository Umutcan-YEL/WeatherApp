import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

function Error() {
  const { t } = useTranslation();
  const restart = () => {
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };
  useEffect(() => {
    restart();
  });
  return (
    <div>
      <h1 style={{ marginTop: "20rem" }} className="text-center text-white">
        {" "}
        {t("alert")}{" "}
      </h1>
    </div>
  );
}

export default Error;
