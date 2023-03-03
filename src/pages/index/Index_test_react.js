import React, { Component } from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

import logo from '../index/images/TOPBET.png';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    body: {
        fontSize: 16,
        marginBottom: 8,
    },
    footer: {
        fontSize: 12,
    },
});

const upcomingEvents = [
    {
        id: 1,
        title: "Manchester United vs. Liverpool",
        date: "March 5, 2023",
        time: "9:00 AM EST",
    },
    {
        id: 2,
        title: "Los Angeles Lakers vs. Brooklyn Nets",
        date: "March 6, 2023",
        time: "8:30 PM EST",
    },
    {
        id: 3,
        title: "Boston Red Sox vs. New York Yankees",
        date: "March 7, 2023",
        time: "1:05 PM EST",
    },
];

const openBets = [
    {
        id: 1,
        team: "Manchester United",
        odds: 2.0,
        stake: 10,
    },
    {
        id: 2,
        team: "Los Angeles Lakers",
        odds: 1.5,
        stake: 5,
    },
];

const accountInfo = {
    username: "johnsmith",
    balance: 100,
    currency: "USD",
};

const leaderboardEntries = [
    {
        id: 1,
        username: "user1",
        winnings: 500,
    },
    {
        id: 2,
        username: "user2",
        winnings: 300,
    },
    {
        id: 3,
        username: "user3",
        winnings: 200,
    },
];

export default class Index extends Component {

    handleLogin = () => {
        if (sessionStorage.getItem("username")) {
            this.props.navigation.navigate("Main");
        } else {
            this.props.navigation.navigate("Login");
        }
    };

    handleBestRates = () => {
        this.props.navigation.navigate("BestRates");
    };

    renderleaderboardEntries() {
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>Leaderboard</Text>
                <View style={styles.table}>
                    <View style={styles.tableRow}>
                        <Text style={styles.tableCell}>Rank</Text>
                        <Text style={styles.tableCell}>Username</Text>
                        <Text style={styles.tableCell}>Score</Text>
                    </View>
                    {leaderboardEntries.map((entry, index) => (
                        <View style={styles.tableRow} key={entry.id}>
                            <Text style={styles.tableCell}>{index + 1}</Text>
                            <Text style={styles.tableCell}>{entry.username}</Text>
                            <Text style={styles.tableCell}>{entry.score}</Text>
                        </View>
                    ))}
                </View>
            </View>
        );
    }

    renderUpcomingEvents() {
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>Upcoming Events</Text>
                {upcomingEvents.map(event => (
                    <View style={styles.eventItem} key={event.id}>
                        <View style={styles.eventDetails}>
                            <Text style={styles.eventTitle}>{event.title}</Text>
                            <Text style={styles.eventTime}>{event.date} - {event.time}</Text>
                        </View>
                        <TouchableOpacity style={styles.eventBetButton} onPress={() => alert('TODO: Implement bet now')}>
                            <Text style={styles.eventBetButtonText}>Bet Now</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
        );
    }

    renderOpenBets() {
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>Open Bets</Text>
                <View>
                    {openBets.map(bet => (
                        <Text key={bet.id}>
                            {bet.team} ({bet.odds}) - ${bet.stake}
                        </Text>
                    ))}
                </View>
            </View>
        );
    }

    renderAccountInfo() {
        return (
            <View style={styles.accountInfo}>
                <Text style={styles.accountInfoText}>Account Information</Text>
                <Text style={styles.accountInfoText}>Username: {accountInfo.username}</Text>
                <Text style={styles.accountInfoText}>Balance: {accountInfo.balance} {accountInfo.currency}</Text>
            </View>
        );
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.logo}>
                        <Image source={logo} alt="TopBet Logo" style={styles.logoImage} />
                    </TouchableOpacity>
                </View>

                <View style={styles.content}>
                    {this.renderUpcomingEvents()}
                    {this.renderleaderboardEntries()}
                    {this.renderOpenBets()}
                    {this.renderAccountInfo()}
                </View>

                <View style={styles.footer}>
                    <Text style={styles.footerText}>
                        At Top Bet, we're committed to promoting responsible and ethical sports betting practices.{"\n"}
                        That's why we offer rewards for watching ads, rather than requiring users to bet money.{"\n"}
                        This ensures that users can enjoy the thrill of sports betting without taking unnecessary risks{"\n"}
                        or engaging  in behavior that is harmful to themselves or others.{"\n"}
                        Our rewards program is designed to be fair, transparent, and easy to use.{"\n"}
                        Simply watch ads and earn rewards that you can use to place bets on your favorite sports teams and events.{"\n"}
                        We provide clear and upfront information on the terms and conditions of our rewards program,{"\n"}
                        so you can make informed decisions about your betting and avoid any potential risks or issues.
                    </Text>
                </View>
            </View>
        );
    }
}
