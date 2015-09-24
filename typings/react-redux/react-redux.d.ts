// Type definitions for Redux v1.0.0
// Project: https://github.com/rackt/redux
// Definitions by: William Buchwalter <https://github.com/wbuchwalter/>, Vincent Prouillet <https://github.com/Keats/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path='../react/react.d.ts'/>
/// <reference path='../redux/redux.d.ts'/>

declare module ReactRedux {
	interface ConnectOptions {
		options?: boolean;
	}
	
	interface MapStateToProps {
		(state: Object, ownProps?: Object): Object;
	}
	
	interface MapDispatchToPropsFunc{
		(dispatch: Function, ownProps?: Object): Object;
	}
	
	type MapDispatchToProps = Object | MapDispatchToPropsFunc;
	
	interface MergeProps {
		(stateProps: Object, dispatchProps: Object, ownProps: Object): Object;
	}
	
	function connect(mapStateToProps?: MapStateToProps, mapDispatchToProps?: MapDispatchToProps, mergeProps?: MergeProps, options?: ConnectOptions): Function;
	
	interface ProviderProps {
		store: Redux.Store;
	}
	
	type Provider = __React.ComponentClass<ProviderProps>;
	
	var Provider: Provider;
}

declare module "react-redux" {
    export = ReactRedux;
}