// import * as React from 'react';
// import { Fabric, TextField, createRef, RefObject, Slider, SpinButton } from '../../../index';
// // const { Fabric, TextField, createRef, Checkbox, ChoiceGroup, Slider, Dropdown, ComboBox, Toggle, SpinButton, Rating } = window.Fabric;

// class TextFields extends React.Component {
//   // CORRECT:
//   // choicegroup (react version seems to handle it wrong in this case!)
//   // checkbox
//   // dropdown

//   // No clear notion of controlled vs uncontrolled:
//   // rating
//   // combobox

//   // (spinbutton doesn't have basic class names??)

//   // WRONG: see below

//   private _fabricTf = createRef();
//   private _reactTf = createRef();
//   private _fabricSlider = createRef();
//   private _reactSlider = createRef();
//   private _fabricSpinner = createRef<any>();
//   private _reactSpinner = createRef();

//   public render() {
//     return (
//       <Fabric>
//         <h2>Form fields controlled by value, no onChange</h2>
//         <div className="desc">If you try to change the field, nothing should happen.</div>

//         <h3>Text field</h3>
//         <div className="compare">
//           <div>
//             <div>
//               Fabric <em>(incorrect behavior)</em>
//             </div>
//             <TextField value="Fabric static value" componentRef={this._fabricTf} />
//             <button className="get-value" onClick={this._onClick.bind(this, this._fabricTf)}>
//               Get ref value
//             </button>
//           </div>
//           <div>
//             <div>
//               ReactDOM <em>(correct behavior)</em>
//             </div>
//             <input value="React static value" type="text" ref={this._reactTf} />
//             <button className="get-value" onClick={this._onClick.bind(this, this._reactTf)}>
//               Get ref value
//             </button>
//           </div>
//         </div>

//         <h3>Slider</h3>
//         <div className="compare">
//           <div>
//             <div>
//               Fabric <em>(incorrect behavior)</em>
//             </div>
//             <Slider value={3} min={1} max={5} componentRef={this._fabricSlider} />
//             <button className="get-value" onClick={this._onClick.bind(this, this._fabricSlider)}>
//               Get ref value
//             </button>
//           </div>
//           <div>
//             <div>
//               ReactDOM <em>(correct behavior)</em>
//             </div>
//             <input type="range" value={3} min={1} max={5} ref={this._reactSlider} />
//             <button className="get-value" onClick={this._onClick.bind(this, this._reactSlider)}>
//               Get ref value
//             </button>
//           </div>
//         </div>

//         <h3>SpinButton</h3>
//         <div className="compare">
//           <div>
//             <div>
//               Fabric <em>(updates UI but not underlying value)</em>
//             </div>
//             <SpinButton label="" value="3" min={1} max={5} componentRef={this._fabricSpinner} styles={{ root: { maxWidth: '100px' } }} />
//             <button className="get-value" onClick={this._onClick.bind(this, this._fabricSpinner)}>
//               Get ref value
//             </button>
//           </div>
//           <div>
//             <div>
//               ReactDOM <em>(correct behavior)</em>
//             </div>
//             <input type="number" value={3} min={1} max={5} ref={this._reactSpinner} />
//             <button className="get-value" onClick={this._onClick.bind(this, this._reactSpinner)}>
//               Get ref value
//             </button>
//           </div>
//         </div>

//         {/* <h3>Combo box</h3>
//         <div className="item">
//           <ComboBox componentRef={this._fabricCombo} options={[{ key: 'foo', text: 'foo' }, { key: 'bar', text: 'bar' }]} text="foo" />
//           <button className="get-value" onClick={this._onComboClick}>
//             Get ref value
//           </button>
//         </div> */}

//         {/* <div>
//           Fabric
//           <Checkbox checked componentRef={this._fabricCb} />
//           <button className="get-value" onClick={this._onClick.bind(this, this._fabricCb)}>Get ref value</button>
//         </div>
//         <hr />
//         <div>
//           <div>ReactDOM</div>
//           <input type="checkbox" checked ref={this._reactCb} />
//           <button className="get-value" onClick={this._onClick.bind(this, this._reactCb)}>Get ref value</button>
//         </div>
//         <hr /> */}

//         {/* <div>
//           Fabric
//           <Dropdown
//             componentRef={this._fabricDrop}
//             options={[{ key: 'foo', text: 'foo' }, { key: 'bar', text: 'bar' }]}
//             selectedKey="foo"
//           />
//           <button className="get-value" onClick={this._onDropClick}>Get ref value</button>
//         </div>
//         <hr /> */}

//         {/* <div>
//           Fabric
//           <ChoiceGroup
//             componentRef={this._fabricRadio}
//             selectedKey="foo"
//             options={[{ key: 'foo', text: 'foo' }, { key: 'bar', text: 'bar' }]}
//           />
//           <button className="get-value" onClick={this._fabricRadioClick}>Get ref value</button>
//         </div>
//         <hr />
//         <div>
//           <div>ReactDOM</div>
//           <div>
//             <input type="radio" id="foo" name="thing" value="foo" checked ref={this._reactRadio1} />
//             <label htmlFor="foo">foo</label>
//           </div>
//           <div>
//             <input type="radio" id="bar" name="thing" value="bar" ref={this._reactRadio2} />
//             <label htmlFor="bar">bar</label>
//           </div>
//           <button className="get-value" onClick={this._reactRadioClick}>Get ref value</button>
//         </div>
//         <hr /> */}
//       </Fabric>
//     );
//   }

//   private _onClick(ref: RefObject<any>) {
//     if (typeof ref.current.value === 'number') {
//       alert(ref.current.value);
//     } else if (typeof ref.current.checked !== 'undefined' && ref.current.checked !== null) {
//       alert(ref.current.checked);
//     } else {
//       alert(ref.current.value);
//     }
//   }

//   // private _onComboClick = () => {
//   //   alert(this._fabricCombo.current!.state.selectedIndices);
//   // };

//   // private _fabricRadioClick = () => {
//   //   alert(this._fabricRadio.current!.state.keyChecked);
//   // };

//   // private _reactRadioClick = () => {
//   //   alert(this._reactRadio1.current!.checked ? this._reactRadio1.current!.value : this._reactRadio2.current!.value);
//   // };
// }

// ReactDOM.render(<TextFields />, document.getElementById('content'));
