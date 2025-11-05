const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_PROJECT_ID),
    appwriteDBId: String(import.meta.env.VITE_APPWRIRE_DB_ID),
    appwriteTableId: String(import.meta.env.VITE_APPWRIRE_TABLE_ID),
    appwriteBucketId: String(import.meta.env.VITE_APPWRIRE_BUCKET_ID),
}

export default conf