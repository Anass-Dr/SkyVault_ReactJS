import { useState, useEffect } from "react";
import FileService from "../services/FileService";
import UserService from "../services/UserService";
import styles from "./FileSharing.module.css";
import { useAuth } from "react-oidc-context";
import { User } from "../types";

export default function FileSharing({ onClose, fileId }: { onClose: () => void, fileId: string }) {
    const { user } = useAuth();
    const [emails, setEmails] = useState<string[]>([]);
    const [link, setLink] = useState<string>('');
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [allUsers, setAllUsers] = useState<User[]>([]);

    useEffect(() => {
        const getLink = async () => {
            const response = await FileService.getShareLink(fileId, user?.profile.sub as string);
            const token = response.token;
            setLink(`${import.meta.env.VITE_BASE_URL}/share/${token}`);
        };
        getLink();

        const fetchAllUsers = async () => {
            const users = await UserService.getAll(user?.profile.sub as string);
            setAllUsers(users);
        };
        fetchAllUsers();

        const fetchPermissions = async () => {
            const permissions = await FileService.getPermissions(fileId, user?.profile.sub as string);
            setEmails(permissions);
        }
        fetchPermissions();
    }, [fileId, user]);

    const handleAddEmail = async (email: string) => {
        if (!emails.includes(email)) {
            await FileService.addPermission(fileId, email, user?.profile.sub as string);
            setEmails([...emails, email]);
        }
        setSearchTerm('');
    };

    const handleRemoveEmail = async (email: string) => {
        await FileService.removePermission(fileId, email, user?.profile.sub as string);
        setEmails(emails.filter((e) => e !== email));
    }

    const handleCopyLink = () => {
        navigator.clipboard.writeText(link);
    };

    const handleClose = () => {
        onClose();
    };

    const filteredUsers = searchTerm
        ? allUsers.filter((user: User) =>
            user.email.toLowerCase().includes(searchTerm.toLowerCase()) &&
            !emails.includes(user.email)
          )
        : [];

    return (
        <div className={styles["modal-overlay"]} onClick={handleClose}>
            <div className={styles["modal-content"]} onClick={e => e.stopPropagation()}>
                <div className={styles["file-sharing"]}>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h5 className="m-0">Share with others</h5>
                        <button 
                            type="button" 
                            className="btn-close" 
                            onClick={handleClose}
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="input-group mb-3">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Search email address"
                            aria-label="Search email address"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    {filteredUsers.length > 0 && (
                        <ul className="list-group mb-3">
                            {filteredUsers.map((user, key) => (
                                <li
                                    key={key}
                                    className="list-group-item d-flex justify-content-between align-items-center"
                                    style={{cursor: 'pointer'}}
                                    onClick={() => handleAddEmail(user.email)}
                                >
                                    {user.email}
                                </li>
                            ))}
                        </ul>
                    )}
                    <ul className="list-group">
                        {emails.map((email, index) => (
                            <li
                                key={index}
                                className="list-group-item d-flex justify-content-between align-items-center"
                            >
                                {email}
                                <button
                                    type="button"
                                    className="btn-close"
                                    aria-label="Close"
                                    onClick={() => handleRemoveEmail(email)}
                                ></button>
                            </li>
                        ))}
                    </ul>
                    <div className="form-group mt-3">
                        <input
                            type="text"
                            className="form-control"
                            value={link}
                            readOnly
                            placeholder="Copy link"
                        />
                        <button
                            className="btn btn-secondary mt-2"
                            type="button"
                            onClick={handleCopyLink}
                        >
                            Copy link
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
