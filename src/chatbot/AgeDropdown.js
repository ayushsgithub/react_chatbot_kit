import React from 'react';
import { useDispatch } from 'react-redux'
import { addAge } from '../redux/counterSlice'
// import Age from './age';

const AgeDropdown = ({showAge}) => {
  
  const dispatch = useDispatch()

  const handleAgeChange = (e) => {
    if(e.target.value!=='Invalid'){
    showAge(e.target.value);
    dispatch(addAge(e.target.value));}
  };

  return (
    <div>
      <label htmlFor="age">Enter your age: </label>
      <select id="age"  onChange={(e) => {handleAgeChange(e)}}>
      <option value='Invalid'>Choose Age</option>
                <option value={18}>18</option>
                <option value={19}>19</option>
                <option value={20}>20</option>
                <option value={21}>21</option>
                <option value={22}>22</option>
                <option value={23}>23</option>
                <option value={24}>24</option>
                <option value={25}>25</option>
                <option value={26}>26</option>
                <option value={27}>27</option>
                <option value={28}>28</option>
                <option value={29}>29</option>
                <option value={30}>30</option>
                <option value={31}>31</option>
                <option value={32}>32</option>
                <option value={33}>33</option>
                <option value={34}>34</option>
                <option value={35}>35</option>
                <option value={36}>36</option>
                <option value={37}>37</option>
                <option value={38}>38</option>
                <option value={39}>39</option>
                <option value={40}>40</option>
      </select>
    </div>
  );
};

export default AgeDropdown;

