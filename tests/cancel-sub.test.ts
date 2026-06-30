import { cancelSubscription } from '../src/api/cancel-sub';

describe('Subscription Cancellation', () => {
  it('should cancel subscription for valid user', () => {
    const result = cancelSubscription('user-123');
    expect(result.status).toBe('success');
    expect(result.message).toContain('cancelled');
  });

  it('should handle missing user ID', () => {
    const result = cancelSubscription('');
    expect(result.status).toBeDefined();
  });
});
