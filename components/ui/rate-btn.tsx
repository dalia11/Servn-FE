'use client';
import { RateService } from "@/services/buttonActions/rate";
import React, { useState } from "react";
type UpvoteButtonProp = {
    voteId:number,
    votes: number
}
export default function RateButton({voteId, votes}: UpvoteButtonProp) {
      const [Votes, setVotes] = useState(0);
    return(
        <button 
            type="button"
            onClick={() => {RateService(voteId)}} >
              Upvote {votes}
        </button>
    )
}