import React from "react";
// import styles from "./styles/RecipeDetails.module.css";

export default function RecipeDetails() {
  return (
    <>
      <div>
        Hi
      </div>
    </>
  );
}


/*
<body class="container">
    <main>
        <div class="jumbotron bg-image"
            style="background-image: url('https://images.unsplash.com/photo-1528731708534-816fe59f90cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'); height: 750px;">
            <header>
                <%- include('../partials/header'); %>
            </header>

            <div class="row mt-5 align-items-center justify-content-center">
                <div class="col-5">
                    <img src="<%= record.coverArtImg %>" style="width: 24rem; height: 24rem; border-radius: 5px"
                        alt="album artwork">
                </div>
                <div class="col-5 mr-4">
                    <div class="card mb-4 p-3" style="color: #656965; background-color:#F9F8F6">
                        <h2 class="card-title ml-3" style="font-weight: 650">
                            <%= record.albumName %>
                        </h2>
                        <h4 class="card-text ml-3">
                            <span style="font-weight: 400">by</span>
                            <% for (let i=0; i < artists.length; i++) { %>
                            <% if (record.artistName==artists[i].name) { %>
                            <a href="/showArtist/<%= artists[i]._id %>"
                                style="color: #86636B"><%= record.artistName %></a>
                            <% } %>
                            <% } %>
                        </h4>
                        <h5 class="card-text ml-3 mt-2">
                            <span style="font-weight: 400">Genre:</span> <%= record.genre %>
                        </h5>
                        <h5 class="card-text ml-3 mt-2">
                            <span style="font-weight: 400">Rating:</span> <%= record.rating %>/10
                        </h5>
                        <div class="row m-3">
                            <a href="/editInfo/<%= record._id %>" class="card-link btn btn-outline-secondary mr-4">Edit
                            </a>
                            <!-- Making this form show up next to our other button using "d-inline" -->
                            <form action="/collection/<%= record._id %>?_method=DELETE" method="POST">
                                <button class="btn btn-outline-danger">
                                    Delete
                                </button>
                            </form>
                        </div>
                    </div>
                    <div class="card-footer text-muted">
                        Last update: 2 days ago
                    </div>
                </div>
            </div>
        </div>
    </main>
</body>
*/