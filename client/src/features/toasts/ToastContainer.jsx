import { useSelector } from "react-redux";

const ToastContainer = () => {
  const { alerts } = useSelector((state) => state.toasts);
  
  console.log(alerts);
  

  return (
    <div className="z-50 text-center fixed top-5 w-xs self-center">
        {alerts.map((toast) =>
          <div key={toast.id} className="bg-(--color-secondary) text-(--color-on-primary) rounded shadow-lg mb-2">
            {toast.message}
          </div>
        )}        
    </div>
  )
}

export default ToastContainer;
