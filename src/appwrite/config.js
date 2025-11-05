import conf from "../conf/conf.js";
import { Client, ID, TablesDB } from "appwrite";

export class Service {
  client;
  tablesDB;
  
  constructor(){
    this.client = new Client()
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.tablesDB = new TablesDB(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      const tableId = conf.appwriteTableId;
      const rowId   = slug;
      const data = {
        title,
        content,
        featuredImage,
        status,
        userId,
      };
      
      return await this.tablesDB.createRow({
        databaseId: conf.appwriteDBId,
        tableId: tableId,
        rowId: rowId,
        data: data
      });
    } catch (error) {
      console.error("Appwrite Service Error:: createPost::", error);
      throw error;
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      const tableId = conf.appwriteTableId;
      const data = { title, content, featuredImage, status };
      
      return await this.tablesDB.updateRow({
        databaseId: conf.appwriteDBId,
        tableId: tableId,
        rowId: slug,
        data: data
      });
    } catch (error) {
      console.error("Appwrite Service Error:: updatePost::", error);
      throw error;
    }
  }

  async deletePost(rowId) {
    try {
      const tableId = conf.appwriteTableId;
      
      return await this.tablesDB.deleteRow({
        databaseId: conf.appwriteDBId,
        tableId: tableId,
        rowId: rowId
      });
    } catch (error) {
      console.error("Appwrite Service Error:: deletePost::", error);
      throw error;
    }
  }

  async getPost(slug) {
    try {
      const tableId = conf.appwriteTableId;
      
      return await this.tablesDB.getRow({
        databaseId: conf.appwriteDBId,
        tableId: tableId,
        rowId: slug
      });
    } catch (error) {
      console.error("Appwrite Service Error:: getPost::", error);
      throw error;
    }
  }

  async listPosts(queries = [Query.equal("status", "published")]) {
    try {
      const tableId = conf.appwriteTableId;
      
      return await this.tablesDB.listRows({
        databaseId: conf.appwriteDBId,
        tableId: tableId,
        queries: queries
      });
    } catch (error) {
      console.error("Appwrite Service Error:: listPosts::", error);
      throw error;
    }
  }

  async uploadFile(file) {
    try {
        return await this.buckets.createFile(
            conf.appwriteBucketId,
            ID.unique(),
            file
        )
    } catch (error) {
        console.error("Appwrite Service Error:: uploadFile::", error);
        throw error;
    }
  }

  async deleteFile(fileId) {
    try {
        return await this.buckets.deleteFile(
            conf.appwriteBucketId,
            fileId
        )
    } catch (error) {
        console.error("Appwrite Service Error:: deleteFile::", error);
        throw error;
    }
  }

  async getFilePreview(fileId) {
    try {
        return await this.buckets.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    } catch (error) {
        console.error("Appwrite Service Error:: getFilePreview::", error);
        throw error;
    }
  } 
}

const service = new Service();
export default service;