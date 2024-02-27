import { Link, } from "react-router-dom";
import { useGetAllSupplyQuery } from "../../redux/api/baseApi";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const AllSupplies = () => {

  const {data, refetch, isLoading} = useGetAllSupplyQuery();
  console.log(data);
      if(isLoading){
          return <p>Loading....</p>
      }


      const handleDelete = (_id)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
             fetch(`http://localhost:5000/api/v1/all-supply/${_id}`,{
                method:'DELETE', 
             })
             .then(res=>res.json())
             .then(data=>{
                if(data.deletedCount>0){
                    refetch();
                    Swal.fire(
                        'Deleted!',
                        'Your class has been deleted.',
                        'success'
                      )
                }
             })
            }
          })
        
      }
 
    return (
        <div>
            <h1 className="text-3xl text-center mb-6">All Supply Page:</h1>
            <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                <tr>                 
                    <th>Serial</th>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Quantity</th>
                    <th>Add Supply</th>
                    <th>Update Supply</th>
                    <th>Delete Supply</th>
                </tr>
                </thead>
                <tbody>
                {/* row 1 */}
                {
                    
                    data.map((item, i)=>                  
                    <tr key={item._id}>                 
                    
                    <td>
                    {i + 1}
                    </td>
                    
                    <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                        </div>
                        </div>                       
                    </div>
                    </td>
                    <td>
                    {item.title}
                    </td>
                    <td>
                    {item.category}
                    </td>
                    <td>
                    {item.quantity}
                    </td>
                    <td>
                    <Link to='/dashboard/create-supply' className="p-2 rounded bg-sky-600 text-white">Add</Link>
                    </td>
                    {/* <td>
                    <button className=""><FaEdit color="green" size={28} /></button>
                    </td> */}
                    <td>
                    <button className="btn" onClick={()=>document.getElementById('my_modal_4').showModal()}><FaEdit color="green" size={20} /></button>
                    <dialog id="my_modal_4" className="modal h-screen">
                    <div className="modal-box w-11/12  max-w-2xl">
                        <h3 className="font-bold text-lg">Update Supply items!</h3>
                        <p className="mt-4 mb-10">Please click update button to update supply posts. </p>
                        <button className="bg-blue-400 text-white p-3 rounded mx-auto"><Link to={`/dashboard/update-supply/${item._id}`}>Update Supply Post</Link></button>

                        <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Back</button>
                        </form>
                        </div>
                    </div>
                    </dialog>
                    </td>
                    <td>
                    <button onClick={()=>handleDelete(item._id)} className=""><FaRegTrashAlt color="red" size={25} /></button>
                    </td>
                </tr>     
                   )
                }
                          
                </tbody>               
            </table>
            </div>
        </div>
    );
};

export default AllSupplies;