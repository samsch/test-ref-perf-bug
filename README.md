# Test case for React perf warning

To run this test case:
1. Clone project `git clone https://github.com/samsch/test-ref-perf-bug.git`
1. Install deps `yarn install`
1. Start dev server and open browser `yarn start`

The page will open a React Toolbox Dialog. When you close the dialog (click overlay, click close button, or press esc) there is a null reference error, which also triggers this React perf warning:
```
Warning: There is an internal error in the React performance measurement code. We did not expect componentWillUnmount timer to stop while no timer is still in progress for another instance. Please report this as a bug in React.
```
