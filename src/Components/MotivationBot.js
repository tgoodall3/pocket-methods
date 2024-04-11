import React from 'react';
import { GrRobot } from "react-icons/gr";
import '../Styles/motivationBot.css'; // Import the CSS file

const MotivationBot = () => {
    const messages = [
        "Rock on! You’re hitting all the right notes!",
        "Don't fret, you're getting better every day!",
        "You're the high note of my day!",
        "Keep strumming through the hard chords!",
        "Tuning into your success – keep playing!",
        "Drop the beat, not your dreams!",
        "Your rhythm is unbeatable, keep the groove going!",
        "You've got more hits in you than a jukebox!",
        "Like a fine vinyl, you only get better with time!",
        "Don’t pause now, you’re about to hit the chorus!",
        "Let the music in you play louder than your doubts!",
        "You’re more talented than a cat walking on a piano!",
        "Keep jamming through the rough patches!",
        "Your melody is shaping up to be a chart-topper!",
        "Don't skip a beat, your crescendo is coming!",
        "Turn up the volume on your efforts, you’re sounding great!",
        "Encore! Your perseverance deserves applause!",
        "Bass-ically, you’re doing amazing!",
        "Harmonize with your hopes, not your fears!",
        "You're not flat, you're just in a minor key. Find your major joy again!"
      ];
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];

  return (
    <div className="bot">
      <GrRobot className="bot-icon" /> {/* Replace GiRobotHelmet with MdSentimentSatisfiedAlt */}
      <span className="bot-message">{randomMessage} - PocketBot</span> {/* Add a class to the message */}
    </div>
  );
};

export default MotivationBot;