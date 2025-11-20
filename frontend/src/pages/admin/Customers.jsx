import { useState, useEffect } from 'react'
import { userService } from '../../services/userService'
import '../../styles/pages/admin/Customers.css'

const Customers = () => {
  const [customers, setCustomers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchCustomers()
  }, [])

  const fetchCustomers = async () => {
    try {
      const data = await userService.getAllCustomers()
      setCustomers(data)
    } catch (err) {
      setError('Failed to fetch customers')
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <div>Loading...</div>
  if (error) return <div className="error">{error}</div>

  return (
    <div className="customers">
      <h1>Customers</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {customers.map(customer => (
            <tr key={customer.user_id}>
              <td>{customer.user_id}</td>
              <td>{customer.name}</td>
              <td>{customer.phone}</td>
              <td>{customer.address}</td>
              <td>{customer.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Customers

