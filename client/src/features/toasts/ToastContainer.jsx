import { useSelector } from "react-redux";

const ToastContainer = () => {
  const { alerts } = useSelector((state) => state.toasts);  

  return (
    <div className="z-50 text-center fixed top-30 w-xs self-center lg:right-15">
        {alerts.map((toast) =>
          <div key={toast.id} className="p-2 bg-(--color-secondary) text-(--color-on-primary) rounded shadow-lg mb-2">
            {toast.message}
          </div>
        )}        
    </div>
  )
}

export default ToastContainer;
