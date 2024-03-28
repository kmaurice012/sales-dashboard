import styles from "./style.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Image from "next/image";
import React, { useEffect } from "react";

interface ParentProps {
  // Other props for the parent component
  placeholder: "Search For A Customer...";
}
const TransactionsPage: React.FC<ParentProps> = async ({ placeholder }) => {
 
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api"); // Replace with your API route path
        if (!response.ok) {
          throw new Error(`Error fetching data: ${response.statusText}`);
        }
        const data = await response.json();
        console.log(data);
      } catch (error: any) {
        console.log(error);
        
        // setError(error.message);
      }
    };

    fetchData();
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder={placeholder} />
        <div className={styles.inputContainer}>
          <div className={styles.select}>
            <select className={styles.select}>
              <option value="1">Americano</option>
              <option value="2">Latte</option>
              <option value="3">Green Tea</option>
            </select>
          </div>{" "}
        </div>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            {/* <td>Created At</td> */}
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                John Doe
              </div>
            </td>
            <td>johndoe@gmail.com</td>
            {/* <td>{user.createdAt?.toString().slice(4, 16)}</td> */}
            <td>Client</td>
            <td>active</td>
            <td>
              {/* <div className={styles.buttons}>
                <Link href={`/dashboard/users/${user.id}`}>
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>
                <form action={deleteUser}>
                  <input type="hidden" name="id" value={user.id} />
                  <button className={`${styles.button} ${styles.delete}`}>
                    Delete
                  </button>
                </form>
              </div> */}
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                John Doe
              </div>
            </td>
            <td>johndoe@gmail.com</td>
            {/* <td>{user.createdAt?.toString().slice(4, 16)}</td> */}
            <td>Client</td>
            <td>active</td>
            <td>
              {/* <div className={styles.buttons}>
                <Link href={`/dashboard/users/${user.id}`}>
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>
                <form action={deleteUser}>
                  <input type="hidden" name="id" value={user.id} />
                  <button className={`${styles.button} ${styles.delete}`}>
                    Delete
                  </button>
                </form>
              </div> */}
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                John Doe
              </div>
            </td>
            <td>johndoe@gmail.com</td>
            {/* <td>{user.createdAt?.toString().slice(4, 16)}</td> */}
            <td>Client</td>
            <td>active</td>
            <td>
              {/* <div className={styles.buttons}>
                <Link href={`/dashboard/users/${user.id}`}>
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>
                <form action={deleteUser}>
                  <input type="hidden" name="id" value={user.id} />
                  <button className={`${styles.button} ${styles.delete}`}>
                    Delete
                  </button>
                </form>
              </div> */}
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                John Doe
              </div>
            </td>
            <td>johndoe@gmail.com</td>
            {/* <td>{user.createdAt?.toString().slice(4, 16)}</td> */}
            <td>Client</td>
            <td>active</td>
            <td>
              {/* <div className={styles.buttons}>
                <Link href={`/dashboard/users/${user.id}`}>
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>
                <form action={deleteUser}>
                  <input type="hidden" name="id" value={user.id} />
                  <button className={`${styles.button} ${styles.delete}`}>
                    Delete
                  </button>
                </form>
              </div> */}
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                John Doe
              </div>
            </td>
            <td>johndoe@gmail.com</td>
            {/* <td>{user.createdAt?.toString().slice(4, 16)}</td> */}
            <td>Client</td>
            <td>active</td>
            <td>
              {/* <div className={styles.buttons}>
                <Link href={`/dashboard/users/${user.id}`}>
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>
                <form action={deleteUser}>
                  <input type="hidden" name="id" value={user.id} />
                  <button className={`${styles.button} ${styles.delete}`}>
                    Delete
                  </button>
                </form>
              </div> */}
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                John Doe
              </div>
            </td>
            <td>johndoe@gmail.com</td>
            {/* <td>{user.createdAt?.toString().slice(4, 16)}</td> */}
            <td>Client</td>
            <td>active</td>
            <td>
              {/* <div className={styles.buttons}>
                <Link href={`/dashboard/users/${user.id}`}>
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>
                <form action={deleteUser}>
                  <input type="hidden" name="id" value={user.id} />
                  <button className={`${styles.button} ${styles.delete}`}>
                    Delete
                  </button>
                </form>
              </div> */}
            </td>
          </tr>
        </tbody>
      </table>{" "}
    </div>
  );
};

export default TransactionsPage;
