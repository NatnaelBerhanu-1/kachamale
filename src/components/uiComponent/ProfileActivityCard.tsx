import Image from "next/image";

interface PropsType {
  color: string;
  mainTitle: string;
  title: string;
  desc: string;
  isPaymentInvoice?: boolean;
  invoiceDesc: string;
  invoiceName: string;
}

function ProfileActivityCard({
  color,
  mainTitle,
  title,
  desc,
  isPaymentInvoice,
  invoiceDesc,
  invoiceName,
}: PropsType) {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col items-start">
        <div className="w-fit flex items-center h-full gap-2">
          <div className={`h-3 w-3 bg-${color} rounded-full`}></div>
          <p className="font-medium">{mainTitle}</p>
        </div>
        <div className="flex justify-between w-full items-start h-full border-l-[1px] ml-[5px]">
          <span className="pl-3">
            <p className="text-sm font-medium">{title}</p>
            <p className="text-sm text-gray_text">{desc}</p>
          </span>
          <p className="text-gray_text text-sm">12 min ago</p>
        </div>
      </div>
      {isPaymentInvoice && (
        <div className="flex flex-col items-start">
          <div className="w-fit flex items-center h-full gap-2">
            <div className="h-3 w-3 bg-red-600 rounded-full"></div>
            <p className="font-medium">
              Invoices have been uploaded for payment
            </p>
          </div>
          <div className="flex justify-between w-full items-start h-full border-l-[1px] ml-[5px]">
            <div className="pl-3 flex flex-col gap-3">
              {/* <p className="font-medium">Nissan GT-R</p> */}
              <p className="text-sm text-gray_text">{invoiceDesc}</p>
              <span className="flex gap-2">
                <Image
                  className="w-6 h-8 object-contain"
                  src={"/assets/PDF.png"}
                  alt="pdf-logo"
                  width={40}
                  height={40}
                />
                <p className="font-medium">{invoiceName}</p>
              </span>
            </div>
            <p className="text-gray_text text-sm">14 min ago</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileActivityCard;
