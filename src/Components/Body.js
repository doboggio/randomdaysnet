import React from "react";

function Top10List()
{
    return (
            <div>
                <h1>Top 10 facts about my website!!!1!</h1>
                <ol>
                    <li>{"It was built on React (the thing that facebook made!!!)"}</li>
                    <li>I taught myself React in only a few days</li>
                    <li>Grafic design is my pashun</li>
                    <li>Free space</li>
                    <li>This is my 2nd web development project I've ever worked on!!!1!</li>
                    <li>I was going to write this in Svelte but I was told to learn this first.</li>
                    <li>Free space 2 (i'm running out of facts)</li>
                    <li>This website is essentially a testament to how quickly I can learn.</li>
                    <li>This website is not very serious</li>
                    <li>This website should probably be a little more serious.</li>
                </ol>
            </div>
   );
}

export default class Body extends React.Component{
    render()
    {
        return(
            <Top10List />
        );
    }
}