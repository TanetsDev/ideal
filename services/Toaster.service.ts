import { ToastPosition, toast } from "react-toastify";

class ToasterService {
  constructor() {}
  private config = {
    position: "top-right" as ToastPosition,
    autoClose: 3000,
    hideProgressBar: false,
    newestOnTop: false,
    closeOnClick: true,
    rtl: false,
    draggable: true,
    pauseOnHover: true,
    theme: "light",
  };

  public sucsess = (text: string) => {
    toast.success(text, this.config);
  };

  public error = (text: string) => {
    toast.error(text, this.config);
  };

  public info = (text: string) => {
    toast.info(text, this.config);
  };
}

const toasterService = new ToasterService();

export default toasterService;
