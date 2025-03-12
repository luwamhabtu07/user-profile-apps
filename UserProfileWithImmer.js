import React from "react";
import { useImmer } from "use-immer";

const UserProfileWithImmer = () => {
    const [userProfile, updateUserProfile] = useImmer({
        name: "John Doe",
        email: "johndoe@example.com",
        contactDetails: {
            phone: "123-456-7890",
            address: "123 Main St, City, Country"
        },
        preferences: {
            newsletter: true,
            notifications: true
        }
    });

    const updateContactDetails = (newPhone, newAddress) => {
        updateUserProfile(draft => {
            draft.contactDetails.phone = newPhone;
            draft.contactDetails.address = newAddress;
        });
    };

    const toggleNewsletterSubscription = () => {
        updateUserProfile(draft => {
            draft.preferences.newsletter = !draft.preferences.newsletter;
        });
    };

    return (
        <div>
            <h2>User Profile</h2>
            <p><strong>Name:</strong> {userProfile.name}</p>
            <p><strong>Email:</strong> {userProfile.email}</p>
            <p><strong>Phone:</strong> {userProfile.contactDetails.phone}</p>
            <p><strong>Address:</strong> {userProfile.contactDetails.address}</p>
            <p><strong>Newsletter Subscription:</strong> {userProfile.preferences.newsletter ? "Subscribed" : "Not Subscribed"}</p>
            
            <button onClick={() => updateContactDetails("987-654-3210", "456 Elm St, City, Country")}>
                Update Contact Details
            </button>
            <button onClick={toggleNewsletterSubscription}>
                Toggle Newsletter Subscription
            </button>
        </div>
    );
};

export default UserProfileWithImmer;
