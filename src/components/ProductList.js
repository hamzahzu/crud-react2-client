import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { Link, Switch } from 'react-router-dom';

const ProductList = () => {
  const [products, setProduct]  = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () =>{
        const response = await axios.get('http://localhost:5000/products');
        setProduct(response.data);
        //console.log(response.data);
  }

  const deleteProduct = async(id) =>{
      await axios.delete(`http://localhost:5000/products/${id}`);
      getProducts();
  }

  return (
    <div>
        <Link to="/add" className='button is-primary mt-2'>Add New</Link>
        <table className='table is-striped is-full is-size-7'>
            <thead>
                <tr className='has-text-centered'>
                    <th>No</th>
                    <th>Kode Barang</th>
                    <th>Nama Barang</th>
                    <th>Stok</th>
                    <th>Harga</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {products.map((val, index) => (
                    <tr key={val.id}>
                        <td>{index + 1}</td>
                        <td>{val.kd_barang}</td>
                        <td>{val.nm_barang}</td>
                        <td>{val.stok}</td>
                        <td>{val.harga}</td>
                        <td>
                            <Link to={`/edit/${val.id}`} className='button is-small is-info mr-1'>Edit</Link>
                            <button className='button is-small is-danger' onClick={() => deleteProduct(val.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
                
            </tbody>
        </table>
    </div>
  )
}

export default ProductList