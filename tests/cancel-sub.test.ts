export const cancelSubscription = (userId: string) => {
    console.log(`Canceling subscription for user: ${userId}`);
    return { status: "success", message: "Subscription cancelled." };
};
