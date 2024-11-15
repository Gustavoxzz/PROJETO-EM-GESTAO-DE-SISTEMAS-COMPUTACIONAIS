
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [donors, setDonors] = useState([]);
  const [donations, setDonations] = useState([]);
  const [newDonor, setNewDonor] = useState({ nome: '', email: '', telefone: '' });
  const [newDonation, setNewDonation] = useState({ id_doador: '', valor: '', destino: '' });

  useEffect(() => {
    fetchDonations();
  }, []);

  const fetchDonations = async () => {
    const response = await axios.get('http://localhost:5000/api/donations');
    setDonations(response.data);
  };

  const handleDonorSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/donors', newDonor);
    setNewDonor({ nome: '', email: '', telefone: '' });
    fetchDonations();
  };

  const handleDonationSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/donations', newDonation);
    setNewDonation({ id_doador: '', valor: '', destino: '' });
    fetchDonations();
  };

  return (
    <div>
      <h1>Gestão de Doações</h1>

      <h2>Cadastrar Doador</h2>
      <form onSubmit={handleDonorSubmit}>
        <input type="text" placeholder="Nome" value={newDonor.nome} onChange={(e) => setNewDonor({ ...newDonor, nome: e.target.value })} required />
        <input type="email" placeholder="Email" value={newDonor.email} onChange={(e) => setNewDonor({ ...newDonor, email: e.target.value })} required />
        <input type="text" placeholder="Telefone" value={newDonor.telefone} onChange={(e) => setNewDonor({ ...newDonor, telefone: e.target.value })} required />
        <button type="submit">Cadastrar</button>
      </form>

      <h2>Cadastrar Doação</h2>
      <form onSubmit={handleDonationSubmit}>
        <input type="text" placeholder="ID do Doador" value={newDonation.id_doador} onChange={(e) => setNewDonation({ ...newDonation, id_doador: e.target.value })} required />
        <input type="number" placeholder="Valor" value={newDonation.valor} onChange={(e) => setNewDonation({ ...newDonation, valor: e.target.value })} required />
        <input type="text" placeholder="Destino" value={newDonation.destino} onChange={(e) => setNewDonation({ ...newDonation, destino: e.target.value })} required />
        <button type="submit">Registrar Doação</button>
      </form>

      <h2>Lista de Doações</h2>
      <ul>
        {donations.map((donation) => (
          <li key={donation._id}>
            Doador: {donation.id_doador.nome} - Valor: R${donation.valor} - Destino: {donation.destino}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
