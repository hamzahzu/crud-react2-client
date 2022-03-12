import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Link, Switch } from 'react-router-dom';

const AddProduct = () => {
  const [kdBarang, setKdBarang] = useState('');
  const [nmBarang, setNmBarang] = useState('');
  const [stok, setStok] = useState('');
  const [harga, setHarga] = useState('');
  const history = useHistory();
  
  const saveProduct = async (e) =>{
    e.preventDefault();
    await axios.post('http://localhost:5000/products',{
        kd_barang: kdBarang,
        nm_barang: nmBarang,
        stok: stok,
        harga: harga
    });
    history.push("/");
  }

  return (
    <div>
        <form onSubmit={saveProduct}>
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
                <button className='button is-primary'>Save</button>
            </div>
        </form>

    </div>
  )
}

export default AddProduct