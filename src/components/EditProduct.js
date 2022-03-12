import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import { Link, Switch } from 'react-router-dom';

const EditProduct = () => {
  const [kdBarang, setKdBarang] = useState('');
  const [nmBarang, setNmBarang] = useState('');
  const [stok, setStok] = useState('');
  const [harga, setHarga] = useState('');
  const history = useHistory();
  const { id } = useParams();
  
  const updateProduct = async (e) =>{
    e.preventDefault();
    await axios.patch(`http://localhost:5000/products/${id}`,{
        kd_barang: kdBarang,
        nm_barang: nmBarang,
        stok: stok,
        harga: harga
    });
    history.push("/");
  }

  useEffect(() => {
    getProductById();
  },[]);

  const getProductById = async () =>{
    const response = await axios.get(`http://localhost:5000/products/${id}`);
    setKdBarang(response.data.kd_barang)
    setNmBarang(response.data.nm_barang)
    setStok(response.data.stok)
    setHarga(response.data.harga)
  }

  return (
    <div>
        <form onSubmit={updateProduct}>
            <div className="field">
                <label className='label'>Kode Barang</label>
                <input class='input' type="text" placeholder='Kode Barang' value={kdBarang} onChange={(e) => setKdBarang(e.target.value)} />
            </div>
            <div className="field">
                <label className='label'>Nama Barang</label>
                <input class='input' type="text" placeholder='Nama Barang' value={nmBarang} onChange={(e) => setNmBarang(e.target.value)} />
            </div>
            <div className="field">
                <label className='label'>Stok</label>
                <input class='input' type="text" placeholder='Stok' value={stok} onChange={(e) => setStok(e.target.value)} />
            </div>
            <div className="field">
                <label className='label'>Harga</label>
                <input class='input' type="text" placeholder='Harga' value={harga} onChange={(e) => setHarga(e.target.value)} />
            </div>
                
            <div className="field">
                <Link to="/" className='button is-danger mr-2'> &larr; Back</Link>
                <button className='button is-primary'>Update</button>
            </div>
        </form>

    </div>
  )
}

export default EditProduct