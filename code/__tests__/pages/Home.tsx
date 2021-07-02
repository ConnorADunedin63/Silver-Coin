import React from 'react';
import Home from '../../pages/Home';
import { render, fireEvent } from '@testing-library/react-native';
import { ReactTestInstance } from 'react-test-renderer';

describe("Home screen should", () => {
    it("display the Budget button.", () => {
        const { queryByText } = render(<Home />);
        expect(queryByText("Budget")).not.toBeNull();
    });

    it("should navigate to Budget page on button click.", () => {
        const mockNavigation = {
            navigate: jest.fn()
        };
        const navigationSpy = jest.spyOn(mockNavigation, "navigate");

        const { queryByText } = render(<Home navigation={mockNavigation} />);
        
        const budgetBtn: ReactTestInstance | null = queryByText("Budget");
        expect(budgetBtn).not.toBeNull();
        
        fireEvent(budgetBtn!, "press");
        expect(navigationSpy).toBeCalledWith("Budget");
    });

    it("display the Goals button.", () => {
        const { queryByText } = render(<Home />);
        expect(queryByText("Goals")).not.toBeNull();
    });

    it("should navigate to Goals page on button click.", () => {
        const mockNavigation = {
            navigate: jest.fn()
        };
        const navigationSpy = jest.spyOn(mockNavigation, "navigate");

        const { queryByText } = render(<Home navigation={mockNavigation} />);
        
        const goalsBtn: ReactTestInstance | null = queryByText("Goals");
        expect(goalsBtn).not.toBeNull();
        
        fireEvent(goalsBtn!, "press");
        expect(navigationSpy).toBeCalledWith("Goals");
    });

    it("display the Emergency Plan button.", () => {
        const { queryByText } = render(<Home />);
        expect(queryByText("Emergency Plan")).not.toBeNull();
    });

    it("should navigate to Emergency Plan page on button click.", () => {
        const mockNavigation = {
            navigate: jest.fn()
        };
        const navigationSpy = jest.spyOn(mockNavigation, "navigate");

        const { queryByText } = render(<Home navigation={mockNavigation} />);
        
        const planningBtn: ReactTestInstance | null = queryByText("Emergency Plan");
        expect(planningBtn).not.toBeNull();
        
        fireEvent(planningBtn!, "press");
        expect(navigationSpy).toBeCalledWith("Planning");
    });
})