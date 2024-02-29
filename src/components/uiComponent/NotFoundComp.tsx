import React from "react";

import { CardContent, Card } from "../ui/card";

function NotFoundComp({ text }: { text: string }) {
  return (
    <div className="font-bold text-main_blue flex items-center justify-center border text-xl bg-slate-100 shadow-sm py-5 my-4">
      {text}
    </div>
  );
}

export default NotFoundComp;
